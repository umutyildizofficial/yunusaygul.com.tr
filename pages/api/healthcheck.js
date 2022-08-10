// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.send({
    status: "Healthy",
    uptime: process.uptime(),
  });
};
