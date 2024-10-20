class App {
    page = new HomePage;
    main() {
        return this.page.run();
    }
}

const app = {
    id: 'app',
    setup: new App
}