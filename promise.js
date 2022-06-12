const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (reaksi) => {
  try {
    const [iix, vgc] = await Promise.all([promiseTheaterIXX(),promiseTheaterVGC()]);
    let jumlah = 0; //harus let karena nilainya berubah terus hingga berhenti
    jumlah += iix?.filter((film) => film.hasil === reaksi)?.length || 0;
    jumlah += vgc?.filter((film) => film.hasil === reaksi)?.length || 0;
    return jumlah;
  } 
  catch (error) {
    console.log("Pesan error: " + error);
  }
};

module.exports = {
  promiseOutput,
};
