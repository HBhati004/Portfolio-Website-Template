import React, { useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import animationData from '../animations/Animation - 1717573212760.json';
import { collection, addDoc } from 'firebase/firestore';
import { ref, push } from 'firebase/database';
import emailjs from 'emailjs-com';
import ClipLoader from 'react-spinners/ClipLoader';
import { dbFirestore, dbRealtime } from './firebase'; // Adjust import based on your firebaseConfig
import { useTranslation } from 'react-i18next';

const Appointment = () => {
  const { t } = useTranslation();
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    date: '',
    time: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    const { firstName, lastName, contactNumber, date, time } = formData;
  
    // Validate First Name
    if (!firstName || firstName.length > 32 || !/^[a-zA-Z]+$/.test(firstName)) {
      newErrors.firstName = t('appointment.errors.firstName');
    }
  
    // Validate Last Name
    if (!lastName || lastName.length > 32 || !/^[a-zA-Z]+$/.test(lastName)) {
      newErrors.lastName = t('appointment.errors.lastName');
    }
  
    // Validate Contact Number
    if (!contactNumber || !/^\d{10,12}$/.test(contactNumber)) {
      newErrors.contactNumber = t('appointment.errors.contactNumber');
    }
  
    // Validate Date
    const currentDate = new Date();
    const selectedDate = new Date(date);
    const oneWeekFromNow = new Date();
    oneWeekFromNow.setDate(currentDate.getDate() + 7);
  
    if (!date || selectedDate < currentDate.setHours(0, 0, 0, 0) || selectedDate > oneWeekFromNow) {
      newErrors.date = t('appointment.errors.date');
    }
  
    // Validate Time
    if (!time) {
      newErrors.time = t('appointment.errors.timeRequired');
    } else {
      const selectedTime = new Date(`${date}T${time}`);
      if (selectedTime < currentDate) {
        newErrors.time = t('appointment.errors.timePast');
      }
    }
  
    return newErrors;
  };
  
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    try {
      // Format the creationDate
      const formatDate = (date) => {
        const d = new Date(date);
        const day = String(d.getDate()).padStart(2, '0');
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const year = d.getFullYear();
        const hours = String(d.getHours()).padStart(2, '0');
        const minutes = String(d.getMinutes()).padStart(2, '0');
        const seconds = String(d.getSeconds()).padStart(2, '0');
        return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
      };

      const appointmentsCollection = collection(dbFirestore, 'appointments');
      const newAppointment = {
        ...formData,
        creationDate: formatDate(new Date())
      };

      // Add new appointment to Firestore
      await addDoc(appointmentsCollection, newAppointment);

      // Add new appointment to Realtime Database
      const appointmentsRef = ref(dbRealtime, 'appointments');
      await push(appointmentsRef, newAppointment);

      const templateParams = {
        firstName: newAppointment.firstName,
        lastName: newAppointment.lastName,
        contactNumber: newAppointment.contactNumber,
        date: newAppointment.date,
        time: newAppointment.time
      };

      // Example of sending email using emailjs
      const response = await emailjs.send('service_gzlguod', 'template_b5v2cgp', templateParams, 'e833t81okhH6RC7gB');

      console.log('Email sent successfully:', response);
      alert(t('appointment.errors.emailSuccess'));
      setFormData({
        firstName: '',
        lastName: '',
        contactNumber: '',
        date: '',
        time: ''
      });
      setErrors({});
    } catch (error) {
      console.error('Error booking appointment:', error);
      alert(t('appointment.errors.emailError', { errorMessage: error.message }));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-4">
      <div className="md:w-1/2 w-full flex justify-center mb-6 md:mb-0">
        <Player
          autoplay
          loop
          src={animationData}
          style={{ width: '100%', maxWidth: '400px', height: 'auto' }}
        />
      </div>
      <div className="md:w-1/2 w-full rounded-lg text-left shadow-xl p-6" style={{ backgroundColor: '#ADD8E6' }}>
        <h2 className="text-2xl font-semibold mb-4 text-center">{t('appointment.title')}</h2>
        {loading ? (
          <div className="flex justify-center items-center">
            <ClipLoader color="#2D4176" loading={loading} size={50} />
          </div>
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="firstName" className="block text-gray-800">{t('appointment.firstName')}</label>
              <input
                type="text"
                id="firstName"
                className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{ backgroundColor: '#D5DDEB' }}
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              {errors.firstName && <p className="text-red-500">{errors.firstName}</p>}
            </div>
            <div>
              <label htmlFor="lastName" className="block text-gray-800">{t('appointment.lastName')}</label>
              <input
                type="text"
                id="lastName"
                className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{ backgroundColor: '#D5DDEB' }}
                value={formData.lastName}
                onChange={handleChange}
                required
              />
              {errors.lastName && <p className="text-red-500">{errors.lastName}</p>}
            </div>
            <div>
              <label htmlFor="contactNumber" className="block text-gray-800">{t('appointment.contactNumber')}</label>
              <input
                type="text"
                id="contactNumber"
                className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{ backgroundColor: '#D5DDEB' }}
                value={formData.contactNumber}
                onChange={handleChange}
                required
              />
              {errors.contactNumber && <p className="text-red-500">{errors.contactNumber}</p>}
            </div>
            <div>
              <label htmlFor="date" className="block text-gray-800">{t('appointment.date')}</label>
              <input
                type="date"
                id="date"
                className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{ backgroundColor: '#D5DDEB' }}
                value={formData.date}
                onChange={handleChange}
                required
              />
              {errors.date && <p className="text-red-500">{errors.date}</p>}
            </div>
            <div>
              <label htmlFor="time" className="block text-gray-800">{t('appointment.time')}</label>
              <input
                type="time"
                id="time"
                className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{ backgroundColor: '#D5DDEB' }}
                value={formData.time}
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full text-white py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 hover:text-black"
              style={{ backgroundColor: '#32CD32' }}
            >
              {t('appointment.submit')}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Appointment;
