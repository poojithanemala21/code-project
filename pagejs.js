function showSection(sectionId) {
  // Hide all sections
  document.getElementById('intro').classList.add('hidden');
  document.getElementById('contact').classList.add('hidden');
  document.getElementById('internships').classList.add('hidden');
  document.getElementById('projects').classList.add('hidden');
  document.getElementById('Education').classList.add('hidden')
  
  // Show the selected section
  document.getElementById(sectionId).classList.remove('hidden');
}
