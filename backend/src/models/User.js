import  mongoose from "mongoose";
const userSchema=new mongoose.Schema({
  firstName:{
    type:String,
    required:true,
    minLength:4,
    maxLength:50
  },

  lastName:{
    type:String
  },
  email:{
    type:String,
    lowercase:true,
    required:true,
    trim:true,
    unique:true
  },
  password:{
    type:String,
    required:true
  },
  age:{
    type:Number,
    min:18
  },
  gender:{
    type:String,
    enum:["male","female","other"]
  },
  photoUrl:{
    type:String,
    default:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAsgMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAQUDBAYCB//EADgQAAIBAgIHBQQJBQAAAAAAAAABAgMEBREVITFBU3GhEhMiUWEUMlKBI0JDcpGxwdHhJDOCkvH/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/APrYAKgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEPLeBJ5lKMY5zkox82ad/iEbVuEV2qvlujzKOvXq15dqrNyfQC/niVnF66qf3U2eVitm3/ckucGc8C4OqpV6VZfR1IT5MyHJJuLzi2nuaeRZ2WKyg1C5bmtnb3rmMF0CItSinFpprNNbySAAAAAAAAAAAAAAAAAAABp4ld+y0fBl3k9UfT1Nw5rEK/tF3UmvdXhjyQhWu2222823mQAaQABAAAFlhF53dRUKj8En4XnsZeHJHS2Nf2i1p1H72WUua2ijYABFAAAAAAAAAAAAAAAAY7ifd0Kk98YtnK7jpr9f0Vb7jOZLEoAAAAAAAAXOAzzp1oeUk/x/wCFMW2ArxVn6R/UC4ABFAAAAAAAAAAAAAAAAeakFOnKD+smjlHFxbi9q1M60oMYt+5uO8j7lTX894g0AAVAAAAAALzA6bjbym/ry1fJFNTpyqzjTgs5SeSOnoU40aMKUdkY5cwrIACAAAAAAAAAAAAAAAAAYrmhC5oypVNSex70/MygDlri3qW1RwqJLXqe5r0MR1NxQpXEOxWgmt3oU9xhNanm6L7yPlsf8lFcDJOjVg8p05RfqmeVCTeSjJ/JhHknLNpZa3sNqjh1zV19jsR+Keot7PDqVtlNvvKnxZavkFYsLse4j3tVfSS2L4UWIBAAAAAAAAAAAAAAAAAANO8xGjbNwWU6i+rF7ObA3DXrXttQzVSqs1ujrZR3N/XuM1ObjH4Yal/JqlxNXNXGobKVGT9ZvI1pYxct+FU1yWZXgDceKXj+1y/xRCxK7X2q/wBI/sagA34YtdLa4PnEz08Zln9JRTW9xf7lSAOhpYpa1Hk5OD8p6jci1KOcWmvNM5Iy0a9W3l2qM5QfPV+Aw11IKu0xeMso3MVB/GthZpqSUo609mWsipAAAAAAAAAAAbN+zaCoxe9ebt6T2e+1+QHnEMTcm6Vs8obHPz5FUAUAAEAAAAAAAAAAANuyvalrNbZ03ti3+RqAK6qjWhWpqdN5xZkObsLt2lXPW6cmu3H9To4tSipReaazzIJAAAAAAABgvK/s1tOrvS8K83uOZbbbbebe1+Zb49PwUqe5tyZTlgAAIAAAAAAAAAAAAAAAAF1glftU5UJPNw1x5FKbeF1HTvqeT959l+uYqujBBJAAAAAAYa9tRrtSq01JrUmzHo+04EepILBGj7TgR6jR9pwI9SQERo+04Eeo0facCPUkARo+04Eeo0facCPUkARo+04Eeo0facCPUkARo+04Eeo0facCPUkARo+04Eeo0facCPUkARo+04Eeo0facCPUkARo+04Eep6hY2sZxlGjFNPNMkCqzEgEAAAf/9k="
  },
  about:{
    type:String,
    default:"I am a writing by the admin"
  },
  skills:{
    type:[String]

  },
  status:{
    type:Boolean,
    default:true
  }
},
  {
    timestamps:true
  }
);

const User=mongoose.model("User",userSchema);
export  {User};