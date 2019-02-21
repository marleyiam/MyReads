import xhook from 'xhook';

xhook.before(function (request) {
    document.querySelector('.loading').style.display = 'block';
});

xhook.after((request, response) => {
    document.querySelector('.loading').style.display = 'none';
    return response.text;
});