function getBiodata(name, address, hobbies, is_married, school, skills) {
    let biodata = {
        Nama: name,
        Alamat: address,
        Hobi: hobbies,
        Status_Pernikahan: is_married,
        Sekolah: school,
        Skills: skills
    }
    console.log(biodata);
    
    return JSON.stringify(biodata);
    
    
}

getBiodata (
    "Rizky Ariananda Hartono", 
    "Bandung", 
    ["Coding", "Football", "Game"], 
    false, 
    {"highschool": "SMAN 5 Balikpapan", "university": "Limkokwing University"}, 
    [ {"1": "javascript"}, {"2" :"HTML"}, {"3" : "CSS"}]);
console.log(getBiodata);