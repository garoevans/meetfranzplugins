module.exports = (Franz, options) => {
	function getMessages() {
    let notifications = document.querySelector('[data-entity="Entity.UserNotification"] > span > span.scene-space-tab-button__count');
    let direct_notifications = document.querySelectorAll('.scene-space__drawer  [data-entity="Entity.User"].scene-space-tab-button--flash>.scene-space-tab-button__flash');
    let team_notifications = document.querySelectorAll('.scene-space__drawer  [data-entity="Entity.Workroom"].scene-space-tab-button--flash>.scene-space-tab-button__flash');
    let notification_counter = parseInt(notifications.innerText);
    let personal_notification_counter = direct_notifications.length;
    let teams_notification_counter = team_notifications.length;
    let direct_notification_counter = personal_notification_counter + teams_notification_counter;
    Franz.setBadge(direct_notification_counter, notification_counter);
	}

	Franz.loop(getMessages);
}
