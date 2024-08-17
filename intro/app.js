const { createApp, ref } = Vue;

const app = createApp({
    // template: `
    //     <h1>{{ message }}</h1>
    //     <p>- {{author}}</p>
    // `,
    setup() {
        // Con ref() creamos una varianle reactiva.
        const message = ref("I'm Batman");
        const author = ref('Bruce Wayne');

        const changeMessage = () => {
            message.value = 'Hola, Soy Goku';
            author.value = 'Goku';
        }
        
        // setTimeout(() =>{
        //     // Usando .value en la variable reactiva, podemos cambiar el valor.
        //     message.value = 'Hola, Soy Goku';
        //     author.value = 'Goku';
            
        // }, 1500)

        return {
            message,
            author,

            changeMessage,
        };
    },
});

app.mount('#myApp');