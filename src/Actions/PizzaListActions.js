const getPizzaListData = (obj) => {
  //console.log(obj, 'action');
  return {
    type: 'GETLIST',
    payload: obj,
  };
};
const getPizzaItemsData = (obj) => {
  //console.log(obj, 'action');
  return {
    type: 'GETITEMS',
    payload: obj,
  };
};
export default {
  getPizzaListData,
  getPizzaItemsData,
};
