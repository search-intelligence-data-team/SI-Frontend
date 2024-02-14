document.addEventListener('DOMContentLoaded', function() {
    // Function to add a new termsUnit
    function addTermsUnit() {
        var template = document.querySelector('#termsUnitTemplate').content.cloneNode(true);
        var newUnit = template.querySelector('.termsUnit');
        newUnit.querySelector('.termsName').textContent = 'term_' + (document.querySelectorAll('.termsUnit').length + 1);
        newUnit.querySelector('button').addEventListener('click', removeTermsUnit);
        addButton.before(newUnit);
    }

    // Function to remove the termsUnit
    function removeTermsUnit(event) {
        event.target.closest('.termsUnit').remove();
    }

    var addButton = document.querySelector('#svolBody > button');
    addButton.addEventListener('click', addTermsUnit);

    // Add event listeners to existing delete buttons
    document.querySelectorAll('.termsUnit button').forEach(function(button) {
        button.addEventListener('click', removeTermsUnit);
    });
});