export interface MillContactInfo {
  businessName: string;
  tagline: string;
  malayalamName: string;
  location: string;
  taluk: string;
  district: string;
  state: string;
  pincode: string;
  addressFull: string;
  landmark: string;
  primaryPhone: string;
  secondaryPhone: string;
  phoneDial: string;
  whatsappNumber: string;
  whatsappLink: string;
  googleMapShareUrl: string;
  googleMapEmbedUrl: string;
  openingHours: {
    dayRange: string;
    morningEvening: string;
    lunchBreak: string;
    closedDay: string;
  };
}

export const MILL_INFO: MillContactInfo = {
  businessName: "KR Flour Rice and Oil Mill",
  tagline: "Traditional Grain Milling, Pure Cold-Pressed Oils and Fresh Ground Spices",
  malayalamName: "കെ.ആർ. ഫ്ലോർ റൈസ് & ഓയിൽ മിൽ",
  location: "Mullassery (Near Venkitangu)",
  taluk: "Chavakkad Taluk",
  district: "Thrissur District",
  state: "Kerala",
  pincode: "680509",
  addressFull: "KR Flour Rice and Oil Mill, Main Road, Mullassery, Near Venkitangu, Thrissur District, Kerala - 680509",
  landmark: "Near Mullassery Center Junction, on the Venkitangu to Mullassery Link Road",
  primaryPhone: "+91 94472 81042",
  secondaryPhone: "+91 98460 32190",
  phoneDial: "tel:+919447281042",
  whatsappNumber: "+91 94472 81042",
  whatsappLink: "https://wa.me/919447281042?text=Hello%20KR%20Mill,%20I%20would%20like%20to%20inquire%20about%20your%20products%20and%20milling%20services.",
  googleMapShareUrl: "https://share.google/nl9I2yxKnEdPUa9R5",
  googleMapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3922.257364121591!2d76.068214!3d10.563821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba795790a8a6cf7%3A0x6b490d18f5049c6d!2sKR%20Flour%20Rice%20and%20Oil%20Mill!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  openingHours: {
    dayRange: "Monday to Saturday",
    morningEvening: "7:30 AM to 7:00 PM",
    lunchBreak: "1:00 PM to 2:00 PM (Machinery Maintenance)",
    closedDay: "Sunday (Full Facility Deep Cleaning)",
  },
};
