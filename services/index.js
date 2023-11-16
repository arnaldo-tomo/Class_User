class Services {
    static async getUser() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
                method: 'GET',
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log('Succesfuly', data);

            return data;
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
}

export default Services;

