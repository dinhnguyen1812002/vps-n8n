function initReadMore() {
    const descElements = document.querySelectorAll('.desc');
  
    descElements.forEach(desc => {
      const content = desc.querySelector('.desc-content');
      const existingButton = desc.querySelector('.btn-read-more');
      if (!content) return;
  
  
      const contentHeight = content.scrollHeight;
  
  
      if (contentHeight > 120) {
        desc.classList.add('truncated');
  
  
        if (!existingButton) {
          const button = document.createElement('button');
          button.className = 'btn-read-more container';
          button.textContent = 'Xem thêm';
          desc.appendChild(button);
  
          button.addEventListener('click', function () {
            desc.classList.toggle('expanded');
            button.textContent = desc.classList.contains('expanded') ? 'Thu gọn' : 'Xem thêm';
          });
        }
      } else {
  
        if (existingButton) {
          existingButton.remove();
        }
        desc.classList.remove('truncated', 'expanded');
      }
    });
  }