/* Node.js FS Modülü kullanarak CRUD işlemleri yapacağız.

employees.json dosyası oluşturalım ve içerisine {"name": "Employee 1 Name", "salary": 2000} verisini ekleyelim. (CREATE)
Bu veriyi okuyalım. (READ)
Bu veriyi güncelleyelim.
Dosyayı silelim.  */
const fs = require('fs');
// DOSYA OLUŞTURMA
 fs.writeFile('employees.json', '[{"name": "Employee 1 Name", "salary": 2000},', 'utf8', (err)=>{
    if (err) console.log(err);
    console.log('dosya basarılı bir sekilde olusturuldu')
  });   
//VERİ OKUMA
 fs.readFile('employees.json', 'utf8', (err) => {
    if (err) console.log(err);
    console.log("dosya okundu")
})  
//VERİ GÜNCELLEME
fs.appendFile('employees.json' , '  {"name": "Employee 1 Name", "salary": 2000}]' , 'utf-8' , (err)=>{
    if (err) console.log(err)
    console.log('dosya ekleme yapıldı')
})

//DOSYA SİLME
fs.unlink('employees.json' , (err)=> {
    if (err) console.log(err);
    console.log('dosya silindi kank')
  })