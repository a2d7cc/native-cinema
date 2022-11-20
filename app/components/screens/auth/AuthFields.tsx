import { FC } from 'react';
import { Control } from 'react-hook-form';
import { Text, View } from 'react-native'

import { Field } from '@/components/ui'



import { validEmail } from '@/shared/regex';
import { IAuthFormData } from '@/shared/types/auth.interface';


interface IAuthFields {
	control: Control<IAuthFormData>
	isPassRequired?: boolean
}

const AuthFields: FC<IAuthFields> = ({ control, isPassRequired }) => {
	return (
		<>
			<Field<IAuthFormData>
				placeholder='Enter E-Mail'
				control={control}
				name='email'
				rules={{
					required: 'Email',
					pattern: {
						value: validEmail,
						message: 'Please enter a valid email address'
					}
				}}
				keyboardType='email-address'
			/>

			<Field<IAuthFormData>
				placeholder='Enter a password'
				control={control}
				name='password'
				rules={
					isPassRequired
						? {
								required: 'Password is required!',
								minLength: {
									value: 6,
									message: 'Password should be minimum 6 characters long'
								}
						  }
						: {}
				}
			/>
		</>
	)
}

export default AuthFields