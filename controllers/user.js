const path = require("path");
const fs = require("fs");

exports.indexPage = async (req, res, next) => {
    res.sendFile(path.join(__dirname, "../views", "/index.html"));
};

exports.getVideo = async (req, res) => {
    const path = "C:\\Users\\Chima Nweke\\Downloads\\BnHA4Ep5HD.mp4";
    const stat = fs.statSync(path);
    const fileSize = stat.size;
    const range = req.headers.range;

    if (range) {
        const parts = range.replace(/bytes=/, "").split("-");
        const start = parseInt(parts[0], 10);
        const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;

        const chunksize = end - start + 1;
        const file = fs.createReadStream(path, { start, end });
        const headers = {
            "Content-Range": `bytes ${start}-${end}/${fileSize}`,
            "Accept-Ranges": "bytes",
            "Content-Length": chunksize,
            "Content-Type": "video/mp4",
        };

        res.writeHead(206, headers);
        file.pipe(res);
    } else {
        const headers = {
            "Content-Length": fileSize,
            "Content-Type": "video/mp4",
        };
        res.writeHead(200, headers);
        fs.createReadStream(path).pipe(res);
    }
};
