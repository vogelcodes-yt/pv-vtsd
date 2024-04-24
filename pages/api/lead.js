// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const { name, email, phone } = req.body;
  console.log(process.env.TELEGRAM_CHAT_ID)
  fetch(
    `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${process.env.TELEGRAM_CHAT_ID}&text=${encodeURIComponent(name + "\n" + phone + "\n" + email)}`,
  );
  console.log(req.body);

  res.redirect(
    303,
    `https://pay.hotmart.com/T40151129E?off=vvq03ley&email=${email}&name=${name}&phonenumber=${phone}&bid=1713935596628`,
  );
}
