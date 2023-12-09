//contact validation
document.querySelector('.contact-form').addEventListener('submit', function(event) {
    let isValid = true;

    // 验证名字不超过10个单词
    const name = document.getElementById('name').value;
    if (name.split(' ').length > 10) {
        document.getElementById('name-error').textContent = 'Name cannot exceed 10 words.';
        isValid = false;
    } else {
        document.getElementById('name-error').textContent = '';
    }

    
    // 验证主题不超过20个单词
    const subject = document.getElementById('subject').value;
    if (subject.split(' ').length > 20) {
        document.getElementById('subject-error').textContent = 'Subject cannot exceed 20 words.';
        isValid = false;
    } else {
        document.getElementById('subject-error').textContent = '';
    }

    // 验证消息不超过500个单词
    const message = document.getElementById('message').value;
    if (message.split(' ').length > 500) {
        document.getElementById('message-error').textContent = 'Message cannot exceed 500 words.';
        isValid = false;
    } else {
        document.getElementById('message-error').textContent = '';
    }

    if (!isValid) {
        event.preventDefault();
    }
});