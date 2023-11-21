class services {

    static async getUser() {
        try {
            const response = await fetch('https://dummyjson.com/products')
            const data = await response.json();
            // console.log(data)
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
        console.log('cliked', item.title)
    }
}
export default services;