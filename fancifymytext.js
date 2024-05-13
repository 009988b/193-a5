function showAlert() {
  alert("You clicked the button!");
}

function increaseFontSize() {
  const textarea = document.getElementById('textarea');
  textarea.style.fontSize = '24px';
}

function applyFancyStyles() {
  const textarea = document.getElementById('textArea');
  const fancyShmancy = document..getElementById('fancyShmancy');

  textarea.style.fontWeight = 'bold';
  textarea.style.color = 'blue';
  textarea.style.textDecoration = 'underline';
}

function mooText() {
  const textarea = document.getElementById('textArea');
  let text = textarea.value;

  // Uppercase the text
  text = text.toUpperCase();

  // Add "-Moo" to the last word of each sentence
  const sentences = text.split('. ');
  const modifiedSentences = sentences.map(sentence => {
    const words = sentence.split(' ');
    const lastWord = words[words.length - 1];
    words[words.length - 1] = `${lastWord}-Moo`;
    return words.join(' ');
  });
  const modifiedText = modifiedSentences.join('. ') + '.';

  textarea.value = modifiedText;
}
