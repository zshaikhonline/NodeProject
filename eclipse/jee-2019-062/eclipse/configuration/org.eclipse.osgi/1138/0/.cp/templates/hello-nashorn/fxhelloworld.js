
function start(stage) {
    stage.title = "Hello World!";
    var button = new Button();
    button.text = "Say 'Hello World'";
    button.onAction = function() print("Hello World!");
    var root = new StackPane();
    root.children.add(button);
    stage.scene = new Scene(root, 300, 250);
    stage.show();
}
load("fxinit.js");
