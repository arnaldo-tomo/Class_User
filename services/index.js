class services {

    static async getUser() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos')
            const data = await response.json();
            return data;
        } catch (error) {

            console.error("msm", error);
        }

    }

    static async SaveUser(user) {
        try {
            const response = await post('https://jsonplaceholder.typicode.com/todos', user)
            const data = await response.json();
            return data;
        } catch (error) {

            console.error("msm", error);
        }

    }

    // comentarrio
    static async DeleteUser(user) {
        try {
            const response = await post('https://jsonplaceholder.typicode.com/todos', user)
            const data = await response.json();
            return data;
        } catch (error) {

            console.error("msm", error);
        }

    }

    static set(item) {
        this.message(item);
    }


    static message(item) {
        console.log('This Message is Static', item.title)
    }
}
export default services;