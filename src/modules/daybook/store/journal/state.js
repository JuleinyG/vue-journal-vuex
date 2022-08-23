  
//  export default () => ({

//  })

export default () => ({
    isLoading: true,
    entries: [
        {
            id:  '1', //new Date().getTime(), //123712545485
            date: new Date().toDateString(), // sat 23, Julio
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea omnis commodi repellendus vero voluptas illum enim veniam, pariatur rerum reiciendis recusandae ratione at amet nemo, eum, quod officia temporibus magni?',
            picture: null, // https://

        },
        {
            id: '2', //new Date().getTime() + 1000, //123712545485
            date: new Date().toDateString(), // sat 23, Julio
            text: 'vero voluptas illum enim veniam, pariatur rerum reiciendis recusandae ratione at amet nemo, eum, quod officia temporibus magni?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea omnis commodi repellendus ',
            picture: null, // https://
        },
        {
            id: '3', //new Date().getTime() + 2000, //123712545485
            date: new Date().toDateString(), // sat 23, Julio
            text: 'Liam Rojas  vero voluptas illum enim veniam, pariatur rerum reiciendis recusandae ratione at amet nemo, eum, quod officia temporibus magni?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea omnis commodi repellendus ',
            picture: null, // https://
        },
        
    ]
})