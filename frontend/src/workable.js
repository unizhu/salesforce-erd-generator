import React, { useState, useEffect, useRef, useCallback } from "react";
import axios from "axios";
import { Button, Select, Input, Space, message, Form, Checkbox } from "antd";
import mermaid from "mermaid";
import { UpOutlined, DownOutlined, UndoOutlined, RedoOutlined } from "@ant-design/icons";
import logo from "./nttdata.png";

const { Option } = Select;

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [objects, setObjects] = useState([]);
    const [selectedObjects, setSelectedObjects] = useState([]);
    const [customObjects, setCustomObjects] = useState([]); // Store custom objects
    const [erdData, setErdData] = useState({
        objects: [],
        relationships: [],
        annotations: [],
    });
    const [newObjectName, setNewObjectName] = useState("");
    const [newFieldName, setNewFieldName] = useState("");
    const [newFieldType, setNewFieldType] = useState("string");
    const [newFieldRelation, setNewFieldRelation] = useState("");
    const [newAnnotation, setNewAnnotation] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [zoomLevel, setZoomLevel] = useState(1);
    const [showAllRelationships, setShowAllRelationships] = useState(false);
    const [selectedFieldObject, setSelectedFieldObject] = useState("");
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [fieldLimit, setFieldLimit] = useState(5); // Default to 5
    const [erdHistory, setErdHistory] = useState([]);
    const [currentErdIndex, setCurrentErdIndex] = useState(-1);


    const mermaidDivRef = useRef(null);

    useEffect(() => {
        mermaid.initialize({
            startOnLoad: true,
            securityLevel: "loose",
            themeVariables: {
                primaryColor: "#FFDDC1", // Default color for objects
                primaryTextColor: "#000000",
                primaryBorderColor: "#FF5733",
                secondaryColor: "#FFDDC1",
                tertiaryColor: "#FDF0E3",
            },
        });

        const instanceUrl = localStorage.getItem("instance_url");
        if (instanceUrl) {
            setIsAuthenticated(true);
        }
    }, []);

    const handleSessionExpired = () => {
        message.error("Session expired. Please log in again.");
        setIsAuthenticated(false);
        localStorage.removeItem("instance_url");
        setObjects([]);
    };

    const fetchObjects = useCallback(async () => {
        const instance_url = localStorage.getItem("instance_url");
        try {
            const response = await axios.get("/get_objects", {
                headers: {
                    "Instance-URL": instance_url,
                },
            });
            setObjects(response.data);
            if (response.data.length > 0) {
                setSelectedFieldObject(response.data[0]);
            }
        } catch (error) {
            if (error.response && error.response.status === 401) {
                handleSessionExpired();
            } else {
                message.error("Failed to fetch objects");
                console.error("Fetch objects error:", error);
                handleSessionExpired();
            }
        }
    }, []);

    useEffect(() => {
        if (isAuthenticated) {
            fetchObjects();
        }
    }, [isAuthenticated, fetchObjects]);

    const generateMermaidDiagram = useCallback(async () => {
        const { objects, relationships, annotations } = erdData;
        let mermaidDefinition = "erDiagram\n";

        objects.forEach((obj) => {
            mermaidDefinition += `  ${obj.name} {\n`;
            obj.fields.forEach((field) => {
                mermaidDefinition += `    ${field.type} ${field.name}\n`;
            });
            mermaidDefinition += "  }\n";
        });

        relationships.forEach((rel) => {
            if (
                showAllRelationships ||
                (selectedObjects.includes(rel.from) && selectedObjects.includes(rel.to))
            ) {
                mermaidDefinition += `  ${rel.from} ||--|| ${rel.to} : ${rel.type}\n`;
            }
        });

        annotations.forEach((ann, index) => {
            mermaidDefinition += ` "Note: ${ann.text}" \n`;
        });

        console.log("Mermaid Definition:", mermaidDefinition);

        try {
            if (mermaidDivRef.current) {
                mermaidDivRef.current.innerHTML = "";
            }

            const { svg } = await mermaid.render("mermaidSvg", mermaidDefinition);

            if (mermaidDivRef.current) {
                mermaidDivRef.current.innerHTML = svg;
            }
        } catch (error) {
            console.error("Mermaid rendering error:", error);
            message.error("Failed to render ERD diagram");
        }
    }, [erdData, selectedObjects, showAllRelationships]);

    useEffect(() => {
        if (erdData) {
            generateMermaidDiagram();
        }
    }, [erdData, generateMermaidDiagram]);

    const handleLogin = async (values) => {
        let instance_url;
        switch (values.environment) {
            case "production":
                instance_url = "https://login.salesforce.com";
                break;
            case "sandbox":
                instance_url = "https://test.salesforce.com";
                break;
            case "custom":
                instance_url = values.customUrl;
                break;
            default:
                message.error("Invalid environment selected");
                return;
        }

        try {
            const response = await axios.post("/login", {
                instance_url,
                username: values.username,
                password: values.password,
                security_token: values.securityToken,
            });

            if (response.data.success) {
                setIsAuthenticated(true);
                localStorage.setItem("instance_url", response.data.instance_url);
                fetchObjects();
            } else {
                message.error("Authentication failed");
            }
        } catch (error) {
            message.error("An error occurred during login");
            console.error("Login error:", error);
        }
    };

    const handleObjectSelect = (value) => {
        setSelectedObjects(value);
        if (value.length > 0) {
            setSelectedFieldObject(value[0]);
        }
    };

    const updateErdData = (newErdData) => {
        setErdData(newErdData);
        setErdHistory(prevHistory => {
            const newHistory = prevHistory.slice(0, currentErdIndex + 1);
            newHistory.push(newErdData);
            return newHistory;
        });
        setCurrentErdIndex(prevIndex => prevIndex + 1);
    };


    const handleUndo = () => {
        if (currentErdIndex > 0) {
            setCurrentErdIndex(prevIndex => prevIndex - 1);
            setErdData(erdHistory[currentErdIndex - 1]);
        }
    };

    const handleRedo = () => {
        if (currentErdIndex < erdHistory.length - 1) {
            setCurrentErdIndex(prevIndex => prevIndex + 1);
            setErdData(erdHistory[currentErdIndex + 1]);
        }
    };



    const generateERD = async () => {
        setIsLoading(true);
        const instance_url = localStorage.getItem("instance_url");
        try {
            const response = await axios.post(
                "/generate_erd",
                {
                    objects: selectedObjects,
                    annotations: erdData.annotations,
                    field_limit: fieldLimit,
                },
                {
                    headers: {
                        "Instance-URL": instance_url,
                    },
                }
            );

            updateErdData({
                objects: [...response.data.objects, ...customObjects],
                relationships: response.data.relationships,
                annotations: erdData.annotations,
            });
        } catch (error) {
            if (error.response && error.response.status === 401) {
                handleSessionExpired();
            } else {
                message.error("Failed to generate ERD");
                console.error("Generate ERD error:", error);
            }
        } finally {
            setIsLoading(false);
        }
    };


    const handleAddCustomObject = () => {
        if (newObjectName.trim()) {
            const newObj = {
                name: newObjectName,
                fields: [],
                isCustom: true,
            };
            const updatedCustomObjects = [...customObjects, newObj];
            setCustomObjects(updatedCustomObjects);
            setSelectedFieldObject(newObjectName);
            setSelectedObjects(prevSelected => [...prevSelected, newObjectName]);

            updateErdData({
                ...erdData,
                objects: [...erdData.objects, newObj],
            });

            setNewObjectName("");
        }
    };


    const handleAddCustomField = () => {
        if (newFieldName.trim() && selectedFieldObject) {
            const updatedObjects = erdData.objects.map((obj) => {
                if (obj.name === selectedFieldObject) {
                    const updatedFields = [
                        ...obj.fields,
                        {
                            name: newFieldName,
                            type: newFieldType,
                            referenceTo: newFieldType === "reference" ? [newFieldRelation] : [],
                        },
                    ];
                    return { ...obj, fields: updatedFields };
                }
                return obj;
            });

            let updatedRelationships = [...erdData.relationships];
            if (newFieldType === "reference" && newFieldRelation) {
                updatedRelationships.push({
                    from: selectedFieldObject,
                    to: newFieldRelation,
                    type: newFieldName,
                });
            }

            updateErdData({
                ...erdData,
                objects: updatedObjects,
                relationships: updatedRelationships,
            });

            setNewFieldName("");
            setNewFieldType("string");
            setNewFieldRelation("");
        }
    };


    const handleAddAnnotation = () => {
        if (newAnnotation.trim()) {
            updateErdData({
                ...erdData,
                annotations: [...erdData.annotations, { text: newAnnotation }],
            });
            setNewAnnotation("");
        }
    };


    const handleExport = () => {
        if (!mermaidDivRef.current) {
            message.error("No diagram to export");
            return;
        }
        const svg = mermaidDivRef.current.querySelector("svg");
        const serializer = new XMLSerializer();
        const svgString = serializer.serializeToString(svg);
        const svgBlob = new Blob([svgString], {
            type: "image/svg+xml;charset=utf-8",
        });
        const svgUrl = URL.createObjectURL(svgBlob);
        const downloadLink = document.createElement("a");
        downloadLink.href = svgUrl;
        downloadLink.download = "salesforce_erd.svg";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };

    const handleExportAsPNG = () => {
        if (!mermaidDivRef.current) {
            message.error("No diagram to export");
            return;
        }
        const svg = mermaidDivRef.current.querySelector("svg");
        const svgData = new XMLSerializer().serializeToString(svg);
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const img = new Image();

        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            const pngFile = canvas.toDataURL("image/png");

            const downloadLink = document.createElement("a");
            downloadLink.href = pngFile;
            downloadLink.download = "salesforce_erd.png";
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
        };

        img.src = "data:image/svg+xml;base64," + btoa(svgData);
    };

    const handleZoomIn = () => {
        setZoomLevel((prevZoom) => Math.min(prevZoom + 0.1, 3));
    };

    const handleZoomOut = () => {
        setZoomLevel((prevZoom) => Math.max(prevZoom - 0.1, 0.5));
    };

    const handleResetZoom = () => {
        setZoomLevel(1);
    };

    const handleCollapseExpand = () => {
        setIsCollapsed(!isCollapsed);
        const elements = document.querySelectorAll(".collapsible-content");

        elements.forEach((element) => {
            element.style.display = isCollapsed ? "block" : "none";
        });
    };

    const handleCheckboxChange = (e) => {
        setShowAllRelationships(e.target.checked);
    };

    const LoginForm = () => (
        <Form onFinish={handleLogin}>
            <Form.Item
                name="environment"
                rules={[{ required: true, message: "Please select an environment" }]}
            >
                <Select placeholder="Select environment">
                    <Option value="production">Production</Option>
                    <Option value="sandbox">Sandbox</Option>
                    <Option value="custom">Custom</Option>
                </Select>
            </Form.Item>
            <Form.Item name="customUrl" rules={[{ required: false }]}>
                <Input placeholder="Custom URL (if Custom environment selected)" />
            </Form.Item>
            <Form.Item
                name="username"
                rules={[{ required: true, message: "Please input your username" }]}
            >
                <Input placeholder="Username" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: "Please input your password" }]}
            >
                <Input.Password placeholder="Password" />
            </Form.Item>
            <Form.Item name="securityToken" rules={[{ required: false }]}>
                <Input placeholder="Security Token (optional)" />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Login
                </Button>
            </Form.Item>
        </Form>
    );

    return (
        <div style={{ padding: "20px" }}>
            {!isAuthenticated ? (
                <LoginForm />
            ) : (
                <div>
                    <Button
                        icon={isCollapsed ? <DownOutlined /> : <UpOutlined />}
                        onClick={handleCollapseExpand}
                        style={{ marginBottom: "20px" }}
                    >
                        {isCollapsed ? "Expand All" : "Collapse All"}
                    </Button>
                    <Space style={{ padding: `0px 0px 0px 15px`, fontWeight: `bold` }}>
                        Salesforce ER Diagram Tools by NDC CRM
                    </Space>
                    <div className="collapsible-content">
                        <Select
                            mode="multiple"
                            style={{ width: "100%", marginBottom: "20px" }}
                            placeholder="Select objects"
                            onChange={handleObjectSelect}
                        >
                            {objects.map((obj) => (
                                <Option key={obj} value={obj}>
                                    {obj}
                                </Option>
                            ))}
                            {customObjects.map((obj) => (
                                <Option key={obj.name} value={obj.name}>
                                    {obj.name}
                                </Option>
                            ))}
                        </Select>
                        <div>
                            <Space>
                                <Checkbox onChange={handleCheckboxChange}>
                                    Show relationships with non-selected objects
                                </Checkbox>
                            </Space>
                            <Space style={{ marginRight: `15px`, marginLeft: `15px` }}>|</Space>
                            <Space>
                                <Form.Item name="fieldLimit" label="Field Limit">
                                    <Select
                                        value={fieldLimit}
                                        onChange={(value) => setFieldLimit(value)}
                                        style={{ width: "200px" }}
                                        defaultValue={5} // Set the default value
                                    >
                                        <Option value={5}>5 Fields</Option>
                                        <Option value={10}>10 Fields</Option>
                                        <Option value={20}>20 Fields</Option>
                                        <Option value={999}>All Fields</Option>
                                    </Select>
                                </Form.Item>
                            </Space>
                        </div>
                        <div>
                            <Button
                                onClick={generateERD}
                                style={{ marginBottom: "20px", color: "blue" }}
                                loading={isLoading}
                            >
                                Generate ERD
                            </Button>
                        </div>
                        <Space style={{ marginBottom: "20px" }}>
                            <Input
                                value={newObjectName}
                                onChange={(e) => setNewObjectName(e.target.value)}
                                placeholder="New object name"
                            />
                            <Button onClick={handleAddCustomObject}>Add Object</Button>
                        </Space>
                        <Space style={{ marginLeft: "15px", marginRight: "15px" }}> | </Space>
                        <Space style={{ marginBottom: "20px" }}>
                            <Input
                                value={newFieldName}
                                onChange={(e) => setNewFieldName(e.target.value)}
                                placeholder="New field name"
                            />
                            <Select
                                value={newFieldType}
                                onChange={setNewFieldType}
                                style={{ width: "120px" }}
                            >
                                <Option value="string">Text</Option>
                                <Option value="reference">Lookup</Option>
                                <Option value="number">Number</Option>
                                <Option value="currency">Currency</Option>
                                <Option value="autonumber">Auto Number</Option>
                                <Option value="checkbox">Checkbox</Option>
                                <Option value="date">Date</Option>
                                <Option value="datetime">Date/Time</Option>
                                <Option value="email">Email</Option>
                                <Option value="geolocation">Geolocation</Option>
                                <Option value="percent">Percent</Option>
                                <Option value="phone">Phone</Option>
                                <Option value="time">Time</Option>
                                <Option value="url">URL</Option>
                                <Option value="formula">Formula</Option>
                                <Option value="picklist">Picklist</Option>
                                <Option value="multipicklist">Picklist (Multi-Select)</Option>
                            </Select>
                            {newFieldType === "reference" && (
                                <Select
                                    value={newFieldRelation}
                                    onChange={setNewFieldRelation}
                                    style={{ width: "200px" }}
                                    placeholder="Select related object"
                                >
                                    {selectedObjects
                                        .concat(customObjects.map((obj) => obj.name))
                                        .filter((v, i, a) => a.indexOf(v) === i)
                                        .map((obj) => (
                                            <Option key={obj} value={obj}>
                                                {obj}
                                            </Option>
                                        ))}
                                </Select>
                            )}
                            <Select
                                value={selectedFieldObject}
                                onChange={setSelectedFieldObject}
                                style={{ width: "200px" }}
                            >
                                {selectedObjects
                                    .concat(customObjects.map((obj) => obj.name))
                                    .filter((v, i, a) => a.indexOf(v) === i)
                                    .map((obj) => (
                                        <Option key={obj} value={obj}>
                                            {obj}
                                        </Option>
                                    ))}
                            </Select>
                            <Button onClick={handleAddCustomField}>Add Field</Button>
                        </Space>
                        <div>
                            <Space style={{ marginBottom: "20px" }}>
                                <Input
                                    value={newAnnotation}
                                    onChange={(e) => setNewAnnotation(e.target.value)}
                                    placeholder="New annotation"
                                />
                                <Button onClick={handleAddAnnotation}>Add Annotation</Button>
                            </Space>
                        </div>
                    </div>
                    {erdData && (
                        <div>
                            <Space style={{ marginBottom: "20px" }}>
                                <Button onClick={handleExport} style={{ color: `blue` }}>Export as SVG</Button>
                                <Button onClick={handleExportAsPNG}>Export as PNG</Button>
                                <Button
                                    onClick={handleUndo}
                                    disabled={currentErdIndex <= 0}
                                    icon={<UndoOutlined />}
                                >
                                    Undo
                                </Button>
                                <Button
                                    onClick={handleRedo}
                                    disabled={currentErdIndex >= erdHistory.length - 1}
                                    icon={<RedoOutlined />}
                                >
                                    Redo
                                </Button>
                                <Button onClick={handleZoomIn}>Zoom In</Button>
                                <Button onClick={handleZoomOut}>Zoom Out</Button>
                                <Button onClick={handleResetZoom}>Reset Zoom</Button>


                            </Space>
                            <div
                                style={{
                                    width: "100%",
                                    overflowX: "auto",
                                    border: "1px solid #ccc",
                                    padding: "10px",
                                }}
                            >
                                <div
                                    ref={mermaidDivRef}
                                    style={{
                                        transform: `scale(${zoomLevel})`,
                                        transformOrigin: "top left",
                                        transition: "transform 0.3s ease",
                                    }}
                                />
                            </div>
                        </div>
                    )}
                </div>
            )}
            <div>
                <img
                    src={logo}
                    alt="NTT Data"
                    style={{ height: `20px`, margin: `15px 15px 15px 0px` }}
                />
            </div>
        </div>
    );
};

export default App;
