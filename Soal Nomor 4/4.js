function hitungKembalian(total_belanja, uang) {
    let kembali = uang - total_belanja;

    let DuaPuluhRibu = Math.floor(kembali / 20000);
    let sisa = kembali % 20000;
    let SepuluhRibu = Math.round(sisa / 10000);
    sisa = sisa % 10000;
    let DuaRibu = Math.round(sisa / 2000);
    sisa = sisa % 2000;
    let LimaRatus = Math.round(sisa / 500);

    console.log(DuaPuluhRibu + " x 20000" + "\n" + SepuluhRibu + " x 10000" + "\n" + DuaRibu + " x 2000" + "\n" + LimaRatus + " x 500");
}

hitungKembalian(15500, 50000);