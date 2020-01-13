let CreateShapeInstance = (selectedNode) => {
    let nodeType = selectedNode.type;
    let shapeInstance;
    console.log(nodeType);
    if (nodeType === "ELLIPSE") {
        shapeInstance = figma.createEllipse();
    }
    ;
    if (nodeType === "POLYGON") {
        return figma.createPolygon();
    }
    ;
    if (nodeType === "RECTANGLE") {
        shapeInstance = figma.createRectangle();
    }
    ;
    if (nodeType === "TEXT") {
        return figma.createText();
    }
    ;
    shapeInstance.x = selectedNode.x + (50.0 + selectedNode.width);
    shapeInstance.y = selectedNode.y;
    shapeInstance.resize(selectedNode.width, selectedNode.height);
    shapeInstance.fills = [{
            blendMode: "NORMAL",
            color: { r: 1, g: 1, b: 1 },
            opacity: 1,
            type: "SOLID",
            visible: true
        }];
    console.log(selectedNode["fills"]);
    return shapeInstance;
};
var selectedNode = figma.currentPage.selection[0];
if (selectedNode["children"]) {
    selectedNode = selectedNode["children"][0];
}
let shapeInstance = CreateShapeInstance(selectedNode);
figma.currentPage.appendChild(shapeInstance);
figma.closePlugin();
