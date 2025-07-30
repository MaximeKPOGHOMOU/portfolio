import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
declare var bootstrap: any;

@Component({
  selector: 'app-contact',
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact implements OnInit {

  constructor(private cd: ChangeDetectorRef) {}

  loading = false;

  form = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm() {
    this.form = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
    this.loading = false;
  }

  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  onSubmit(form: NgForm) {
    if (
      !this.form.name.trim() ||
      !this.form.email.trim() ||
      !this.form.subject.trim() ||
      !this.form.message.trim()
    ) {
      this.showToast("Veuillez remplir tous les champs", 'error');
      return;
    }

    if (!this.isValidEmail(this.form.email)) {
      this.showToast("Adresse email invalide", 'error');
      return;
    }

    this.loading = true;

    const formData = new FormData();
    formData.append('name', this.form.name);
    formData.append('email', this.form.email);
    formData.append('suject', this.form.subject);
    formData.append('message', this.form.message);

    fetch('https://formsubmit.co/ajax/maximekpoghomou18@gmail.com', {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: formData
    })
      .then((response) => {
        if (response.ok) {
          form.resetForm();
          this.showToast('Message envoyé avec succès', 'success');
        } else {
          this.showToast("Erreur lors de l'envoi", 'error');
        }
      })
      .catch((error) => {
        console.error("Erreur réseau :", error);
        this.showToast("Échec de connexion. Vérifiez votre Internet.", 'error');

        // Force Angular à redétecter après changement
        this.loading = false;
        this.cd.detectChanges(); 
      })
      .finally(() => {
        this.loading = false;
        this.cd.detectChanges(); 
      });
  }

showToast(message: string, type: 'success' | 'error' = 'success') {
  const toastEl = document.getElementById('formToast');
  if (toastEl) {
    const toastBody = toastEl.querySelector('.toast-body') as HTMLElement | null;
    const progressBar = toastEl.querySelector('.progress-bar') as HTMLElement | null;

    //  Change la couleur du fond du toast
    toastEl.classList.remove('bg-success', 'bg-danger');
    toastEl.classList.add(type === 'success' ? 'bg-success' : 'bg-danger');

    if (toastBody) toastBody.textContent = message;

    if (progressBar) {
      progressBar.style.width = '100%';
      progressBar.style.transition = 'width 3s linear';
      progressBar.style.transformOrigin = 'right';

      setTimeout(() => {
        progressBar.style.width = '0%';
      }, 50);
    }

    const toast = new bootstrap.Toast(toastEl);
    toast.show();
  }
}

}
