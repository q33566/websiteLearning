//condition ? <expression if true> : <expression if false>
if (authenticated) {
    renderApp();
} else {
    renderLogin();
}
authenticated ? renderApp() : renderLogin();