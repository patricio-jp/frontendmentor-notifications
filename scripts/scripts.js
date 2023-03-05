const markAsRead = document.getElementById("markAllRead");

markAsRead.addEventListener('click', (e) => {
    e.preventDefault();
    const counter = document.getElementById("unreadCounter");
    counter.innerHTML = 0;
    const notifications = [...document.getElementById("notifications").children];
    notifications.forEach(notification => {
        const mark = notification.getElementsByClassName("unreadMark");
        if (mark.length > 0) {
            mark[0].outerHTML = '';
        }
        notification.classList.remove("unread");
    });
});