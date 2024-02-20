document.getElementById('resumeDownload').addEventListener('click', function(event) {
  // Prevent the default behavior of the link
  event.preventDefault();

  // Get the URL of the resume file
  var resumeUrl = "images/Abhiraj-Patel-Resume.pdf";

  // Open Google Drive link in a new tab
  var driveUrl = 'https://drive.google.com/file/d/1NfeXVtnV0ftAQBkFJ513Acn8y6fYQ-M3/view?usp=drive_link';

  // Create an anchor element to initiate the download
  var downloadLink = document.createElement('a');
  downloadLink.href = resumeUrl;
  downloadLink.download = 'Abhiraj-Patel-Resume.pdf'; // File name for download
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);

  // Open Google Drive link in a new tab
  window.open(driveUrl, '_blank');
});

document.getElementById('download').addEventListener('click', function(event) {
  // Prevent the default behavior of the link
  event.preventDefault();

  // Get the URL of the resume file
  var resumeUrl = "images/Abhiraj-Patel-Resume.pdf";

  // Open Google Drive link in a new tab
  var driveUrl = 'https://drive.google.com/file/d/1NfeXVtnV0ftAQBkFJ513Acn8y6fYQ-M3/view?usp=drive_link';

  // Create an anchor element to initiate the download
  var downloadLink = document.createElement('a');
  downloadLink.href = resumeUrl;
  downloadLink.download = 'Abhiraj-Patel-Resume.pdf'; // File name for download
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);

  // Open Google Drive link in a new tab
  window.open(driveUrl, '_blank');
});