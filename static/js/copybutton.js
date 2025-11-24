(function () {
	function addCopyButtonToCodeBlocks() {
		var snippets = document.getElementsByClassName('highlight');
		for (var i = 0; i < snippets.length; i++) {
			var button = document.createElement("button");
			button.innerText = "Copy";
			button.addEventListener("click", function () {
				var code = this.previousElementSibling.innerText;
				navigator.clipboard.writeText(code);
				this.innerText = 'Copied!';
				setTimeout(() => { this.innerText = 'Copy'; }, 1000);
			});
			snippets[i].appendChild(button);
		}
	}
	document.addEventListener("DOMContentLoaded", addCopyButtonToCodeBlocks);
})();
