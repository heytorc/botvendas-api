const data = [
    {
        name: "HEYTOR",
        order: {
            id: "1",
            products: [
              {
                  id: "2",
                  name: "product",
              },
              {
                id: "3",
                name: "product",
                quota: [1,2,3],
                companies: [
                  { name: 'accenture' },
                  { name: 'avanade' }
                ]
            },
          ],
        },
    },
];

const recursiveSearch = (obj, refKey = '', results = []) => {
  let r = results
  Object.keys(obj).forEach(key => {
    const value = obj[key];
    let nKey = refKey !== '' ? `${refKey}.${key}` : key;
    
     if (typeof value !== 'object'){
        r.push({ key: nKey, value });
     } else if(typeof value === 'object'){
        recursiveSearch(value, nKey, r);
     }
  });

  return r;
};

let transformed = []

console.log(data);

data.forEach((item, index) => {
  transformed = recursiveSearch(item)
})

transformed = [...new Set(transformed)];

// transformed = transformed.map(item => {
//   let value = item;

//   if (item.includes('.')) {
//     value = item.replaceAll('.', '\'][\'').replace("']", '') + '\']'
//   };
//   return { [item] : data[0] };
// })

console.log(transformed);

// console.log(data[0]['order.id'])