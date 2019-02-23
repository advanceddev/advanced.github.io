document.getElementById("action_btn").onclick = function() {
	location.href = "https://github.com/advanceddev";
};

function handleAction() {
	var text = "https://advanceddev.github.io/advanced.github.io/advanced.css";
	navigator.clipboard.writeText(text).then(function() {
		console.log('Async: Copying to clipboard was successful!');
		alert('Copied!')
	}, function(err) {
		console.error('Async: Could not copy text: ', err);
	});
}