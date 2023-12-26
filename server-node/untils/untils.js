import multer from "multer";
import path from "path";
import nodemailer from 'nodemailer';

export const upload = multer({
  storage: multer.diskStorage({}),
  fileFilter: (req, file, cb) => {
    let ext = path.extname(file.originalname);
    if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
      cb(new Error("File type is not supported"), false);
      return;
    }
    cb(null, true);
  },
});

export function PinComment(arr, fromIndex, toIndex) {
  var element = arr[fromIndex];
  arr.splice(fromIndex, 1);
  arr.splice(toIndex, 0, element);

  return arr;
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'datcong110602@gmail.com',
    pass: 'msth egsy vrnq hhlb',
  },
});

export const sendEmail = ((req, res) => {
  const mailOptions = {
    from: 'datcong110602@gmail.com', // Địa chỉ email của bạn
    to: req.email, // Địa chỉ email người nhận
    subject: 'Đăng ký', // Tiêu đề email
    text: "OKe", // Nội dung email
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.error(error);
      return;
    } else {
      console.log('Email sent: ' + info.response);
      return;
    }
  });
});
