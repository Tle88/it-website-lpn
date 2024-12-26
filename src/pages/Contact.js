import React from 'react';

function Contact (){
  return (
    <div className="contact-container">
      <h1>ติดต่อเรา</h1>
      <form>
        <label>ชื่อ:</label>
        <p><input type="text" placeholder="ชื่อของคุณ" /></p>

        <label>อีเมล:</label>
        <p><input type="email" placeholder="อีเมลของคุณ" /></p>

        <label>ข้อความ:</label>
        <p><input type="text" placeholder="เขียนข้อความ" /></p>

        <button type="submit">ส่ง</button>
      </form>
      <div className="contact-info">
        <p>โทรศัพท์: 053-213-061</p>
        <p>แฟกซ์: 0 5340 8223</p>
        <p>อีเมล: <a href='lannapoly@lannapoly.ac.th'>lannapoly@lannapoly.ac.th</a></p>
        <p>Facebook: <a href='www.facebook.com/lannapolyCNX'>www.facebook.com/lannapolyCNX</a></p>
        <p>@: ที่อยู่ 2 ถนนสุขเกษม ต.ป่าตัน อ.เมือง จ.เชียงใหม่ 50300 โทร. 0 5321 3061, 0 5321 3144, 0 5321 9175</p>
      </div>
    </div>
  );
}

export default Contact;