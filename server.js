const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Menggunakan body-parser untuk mengurai permintaan dengan tipe konten application/json
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());
const allowedOrigins = ['http://localhost:4200', 'http://example2.com'];
app.use(cors({
  origin: function (origin, callback) {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));







const data = {
  "data": [
    {
        "similarity": 1,
        "kota": "AIMAS",
        "kecamatan": "MOISEGEN",
        "kelurahan": "WONOSOBO",
        "provinsi": "PAPUA BARAT",
        "kode_pos": "98451"
      },
      {
        "similarity": 1,
        "kota": "BANYUWANGI",
        "kecamatan": "SRONO",
        "kelurahan": "WONOSOBO",
        "provinsi": "JAWA TIMUR",
        "kode_pos": "68471"
      },
      {
        "similarity": 1,
        "kota": "BATANG",
        "kecamatan": "REBAN",
        "kelurahan": "WONOSOBO",
        "provinsi": "JAWA TENGAH",
        "kode_pos": "51273"
      },
      {
        "similarity": 1,
        "kota": "CURUP",
        "kecamatan": "TERAS TERUNJAM",
        "kelurahan": "WONOSOBO",
        "provinsi": "BENGKULU",
        "kode_pos": "38768"
      },
      {
        "similarity": 1,
        "kota": "KOTA AGUNG",
        "kecamatan": "WONOSOBO",
        "kelurahan": "WONOSOBO",
        "provinsi": "LAMPUNG",
        "kode_pos": "35686"
      },
      {
        "similarity": 1,
        "kota": "MUKOMUKO",
        "kecamatan": "PENARIK",
        "kelurahan": "WONOSOBO",
        "provinsi": "BENGKULU",
        "kode_pos": "38768"
      },
      {
        "similarity": 1,
        "kota": "PACITAN",
        "kecamatan": "NGADIROJO",
        "kelurahan": "WONOSOBO",
        "provinsi": "JAWA TIMUR",
        "kode_pos": "63572"
      },
      {
        "similarity": 1,
        "kota": "SIMPANG TIGA REDELONG",
        "kecamatan": "WIH PESAM",
        "kelurahan": "WONOSOBO",
        "provinsi": "NANGGROE ACEH DARUSSALAM",
        "kode_pos": "24581"
      },
      {
        "similarity": 0.6,
        "kota": "WONOSOBO",
        "kecamatan": "WONOSOBO",
        "kelurahan": "WONOSOBO BARAT",
        "provinsi": "JAWA TENGAH",
        "kode_pos": "56311"
      },
      {
        "similarity": 0.6,
        "kota": "WONOSOBO",
        "kecamatan": "WONOSOBO",
        "kelurahan": "WONOSOBO TIMUR",
        "provinsi": "JAWA TENGAH",
        "kode_pos": "56317"
      },
      {
        "similarity": 0.5,
        "kota": "KUDUS",
        "kecamatan": "UNDAAN",
        "kelurahan": "WONOSOCO",
        "provinsi": "JAWA TENGAH",
        "kode_pos": "59372"
      },
      {
        "similarity": 0.41666666,
        "kota": "PURWOREJO",
        "kecamatan": "NGOMBOL",
        "kelurahan": "WONOSRI",
        "provinsi": "JAWA TENGAH",
        "kode_pos": "54172"
      },
      {
        "similarity": 0.4,
        "kota": "KLATEN",
        "kecamatan": "TRUCUK",
        "kelurahan": "WONOSARI (WONOSOSA)",
        "provinsi": "JAWA TENGAH",
        "kode_pos": "57473"
      },
      {
        "similarity": 0.4,
        "kota": "MASAMBA",
        "kecamatan": "SEKO",
        "kelurahan": "WONO",
        "provinsi": "SULAWESI SELATAN",
        "kode_pos": "92956"
      }
    // ...data lainnya
  ],
  "message": "Sukses",
  "rc": "00",
  "additional_data": []
};

app.get('/fastchannel/api-subdistrict/:kelurahan', (req, res) => {
   const kelurahan = req.params.kelurahan;
  
  const result = data.data.filter(item => item.kelurahan === kelurahan);
  
  res.json(result);
});





const datapekerjaan = {
    message: "Sukses",
    rc: "00",
    data: [
      {
        "code_job": "KYSW",
        "job_field": "KARYAWAN SWASTA",
        "id": 1
      },
      {
        "code_job": "WIRA",
        "job_field": "WIRASWASTA PEDAGANG",
        "id": 2
      },
      // Data lainnya...
    ],
    additional_data: []
};

app.get('/onboarding-scard/pekerjaan', (req, res) => {
    res.json(datapekerjaan);
  });


const databidangusaha = {
    message: "Sukses",
    rc: "00",
    data: [
        {
        "code_industry": "JASA",
        "industry_name": "SEKTOR JASA",
        "id": 1
        },
        {
        "code_industry": "PDY",
        "industry_name": "PERDAGANGAN LAIINYA",
        "id": 2
        },
        {
        "code_industry": "PDRT",
        "industry_name": "PERDAGANAN RETAIL",
        "id": 3
        }
    ],
    additional_data: []
    
}

app.get('/onboarding-scard/bidang-usaha', (req, res) => {
    res.json(databidangusaha);
  });


const datajabatan  = {
    message: "Sukses",
    rc: "00",
    data: [
          {
            "id": 1,
            "code_position": "STAF",
            "position_name": "Staf"
          },
        ],
    additional_data:[]
}  

app.get('/onboarding-scard/jabatan', (req, res) => {
    res.json(datajabatan);
  });

// Menjalankan server pada port yang ditentukan
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
