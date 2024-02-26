// BACK END
const express = require('express');
const { createServer } = require('http');
const { join } = require('path');
const { Server } = require('socket.io');
const PORT = process.env.PORT || 3000; // Mahdollistaa julkaisualustan tarjoaman portin käytön
const app = express();
const server = createServer(app);
const io = new Server(server);

// Tässä ei nyt käytetäkään express staticia vaan lähetetään html manuaalisesti
app.get('/index.html', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
});

// Styles.css tiedoston lähetys index.html tiedostolle
app.get('/styles.css', (req, res) => {
    res.sendFile(join(__dirname, 'styles.css'));
  });

  app.get('/chat.html', (req, res) => {
    res.sendFile(join(__dirname, 'chat.html'));
  });

io.on('connection', (socket) => {

  // Kun palvelin vastaanottaa viestin se emitoi sen kaikille clienteille heti
socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
});
});

server.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});