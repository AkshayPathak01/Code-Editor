const getEl = (id) => document.getElementById(id);

const iFrame = getEl("preview").contentWindow.document;
const htmlTextArea = getEl("html");
const cssTextArea = getEl("css");
const jsTextArea = getEl("js");
$(document).ready(function () {
          $("#HTML").on("click", function (e) {
                    $("#CSS").hide();
                    $("#JS").hide();
                    $("#HTML").show();
                    $("#css").hide();
                    $("#js").hide();
                    $("#html").show();
          });
          $("#CSS").on("click", function (e) {
                    $("#CSS").show();
                    $("#JS").hide();
                    $("#HTML").hide();
                    $("#css").show();
                    $("#js").hide();
                    $("#html").hide();
          });
          $("#JS").on("click", function (e) {
                    $("#CSS").hide();
                    $("#JS").show();
                    $("#HTML").hide();
                    $("#css").hide();
                    $("#js").show();
                    $("#html").hide();
          });
});
document.body.onkeyup = function () {
          iFrame.open();
          iFrame.writeln(
                    htmlTextArea.value +
                              "<style>" +
                              cssTextArea.value +
                              "</style>" +
                              "<script>" +
                              jsTextArea.value +
                              "</script>"
          );
          iFrame.close();
};
