const isAuthenticated = sessionStorage.getItem('isAuthenticated');

if (!isAuthenticated) {
    window.location.href = '/login.html';
}