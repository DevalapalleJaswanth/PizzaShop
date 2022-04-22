import axios from 'axios';
export async function updatePizzaItems(obj, id) {
  console.log(obj, id);
  try {
    let y = await axios.post(
      `https://6215fab47428a1d2a3567953.mockapi.io/pizzaitems/${id}`,
      {
        id: id,
        label: obj.label,
        item: obj.item,
        count: obj.count,
      }
    );
    console.log(y);
    // let x = await axios.put(
    //   `https://6215fab47428a1d2a3567953.mockapi.io/pizzaitems?id:${id}`,
    //   {
    //     count: obj,
    //   }
    // );
    // console.log(x);
  } catch (err) {
    console.log(err);
  }
}
