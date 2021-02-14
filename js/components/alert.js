function showAlertToUser(
	message = 'This is default message',
	cssClass = 'information'
) {
	return `<div class="${cssClass}">${message}</div>`;
}
