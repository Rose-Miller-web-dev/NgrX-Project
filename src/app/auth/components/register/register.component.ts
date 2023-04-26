import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Store, select } from '@ngrx/store'
import { Observable } from 'rxjs'

import { registerAction } from '../../store/actions'
import { isSubmittingSelector } from './../../store/selectors';
@Component ({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit{
    form: FormGroup
    isSubmitting$: Observable<boolean>
        
    constructor(private fb: FormBuilder, private store: Store) {
        this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
        this.form = this.fb.group({
            username: ['', Validators.required],
            email: ['', Validators.required],
            password: ['', Validators.required]
        })

    }

    ngOnInit(): void {
        this.initializeForm()
    }

    initializeForm(): void {
        console.log("my new masterpiece : ", this.isSubmitting$)
    }

    onSubmit() {
        this.store.dispatch(registerAction(this.form.value))
        console.log('form is ', this.form)
    }
}