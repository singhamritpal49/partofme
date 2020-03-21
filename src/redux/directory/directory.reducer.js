const INTIAL_STATE = {
    sections: [
        {
          title: 'hats',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1,
          linkUrl: 'shop/hats'
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
          linkUrl: 'shop/jackets'
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          linkUrl: 'shop/sneakers'
        },
        {
          title: 'womens',
          // imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          // imageUrl: 'https://cdn.shopify.com/s/files/1/0301/7405/files/RXSC-1166_2048x2048.jpg?v=1564752605',
          imageUrl: 'https://i.ibb.co/8D8gXSB/RXSC-1166-2048x2048.jpg',

          // imageUrl: 'https://ucafe6556647d292bbc484a28757.previews.dropboxusercontent.com/p/thumb/AAuXrSGaShRvLLP2wDPJL9ANB4OGC0qjZF70UUfGCtyyarX0PGALl6LjlM1SYUWApF5ZKTv5z1dfYay4HNMiIygh4bses_ABSNf2wWM3T1vUhwXxSsCPQUz_w8Rr--myfO9_nmANXiVtZ0tf7rxBKSf-xkbHksYCt5WAEpECyBAogYhvbjMLUTpJFk-YCKFyCz8OvJcTIDX7O8A1obndzceKDI0DVqlwRLFtjj9kk-LGaHc9XG0V5dWK6jDO0UtqKYA6_d3X0Rn85jCPt3-26jSfz-57hmrJR6pJUFY3nU_pyhvakaBSULmXpO1iBZbYjcOsG48EKSFWnJz3JDIe4tvPzxutGroh1FUtWZinRbgn24WPFJGcNmKKObyu5ddetJxxdjLj23FaVG3uqDSMv0IJ/p.jpeg?fv_content=true&size_mode=5',
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens'
        },
        {
          title: 'mens',
          // imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          imageUrl: 'https://i.ibb.co/5LN9K8V/Tough-Times-5-800x.jpg',
          // imageUrl: 'https://ucc161bf11ca4fac50ba280958be.previews.dropboxusercontent.com/p/thumb/AAsy7GHwqeS6vDRXXeyHn13pqjWsYh6QeJarRvozhAnAYpKLpbI_B7yP_tIuAdYbvZx6BWhzuaS7s4Lgo9n4eXc_GXlZZ9_QwxAQf25q6ZedlEZBe7IlvElbhFGcrTSgFZMS32O0TJLCZ7QQLZZp8qWRGbAAB6J-CJo5rOixi41Dawia5shN_i06TZbVZdLdNcxy8wqX_KLfnkpqS1mrDnBpgdtNsAnFj2pRmW7TCfjC5iFeewgBZHZGdeXlVMfc6eQL1vth9WE_MccczTndVN-PWOPUBEFoh09vEjW2vfBnKyRHYxPs2srqF59AeXQD4SpJkNYwTyhHyis-gjLmjr5eKnkrZF8MqcrUO8urjnFfXiHsQMBlK24nRzed1lbIV2qVSyyz-YIpPEQ9wF3BG1vW/p.jpeg?size=2048x1536&size_mode=3',
          size: 'large',
          id: 5,
          linkUrl: 'shop/mens'
        }
      ]
};

const directoryReducer = (state = INTIAL_STATE, action) => {
    switch(action.type) {
        default: 
        return state;
    }
};
export default directoryReducer;