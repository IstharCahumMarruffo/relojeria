// calendar.js
const { google } = require('googleapis');
const path = require('path');
const auth = new google.auth.GoogleAuth({
  keyFile: path.join(__dirname, 'ruta/al/archivo.json'),
  scopes: ['https://www.googleapis.com/auth/calendar'],
});

async function crearEvento() {
  const authClient = await auth.getClient();
  const calendar = google.calendar({ version: 'v3', auth: authClient });

  const evento = {
    summary: 'Cita con cliente',
    description: 'Revisión de reloj',
    start: {
      dateTime: '2025-06-07T10:00:00-06:00',
      timeZone: 'America/Mexico_City',
    },
    end: {
      dateTime: '2025-06-07T11:00:00-06:00',
      timeZone: 'America/Mexico_City',
    },
  };

  const res = await calendar.events.insert({
    calendarId: 'tu-email@gmail.com',
    requestBody: evento,
  });

  console.log('Evento creado:', res.data.htmlLink);
}

crearEvento().catch(console.error);
