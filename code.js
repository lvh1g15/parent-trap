let CreateShapeInstance = (selectedNode) => {
    let nodeType = selectedNode.type;
    let shapeInstance;
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
    shapeInstance.fills = selectedNode["fills"];
    return shapeInstance;
};
var selectedNode = figma.currentPage.selection[0];
if (selectedNode["children"]) {
    selectedNode = selectedNode["children"][0];
}
let shapeInstance = CreateShapeInstance(selectedNode);
figma.currentPage.appendChild(shapeInstance);
figma.closePlugin();
