import type { Meta, StoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/test'

import { LoginForm } from './AuthForm'

const meta: Meta<typeof LoginForm> = {
  component: LoginForm,
  title: 'Components/AuthForm',
}

export default meta
type Story = StoryObj<typeof LoginForm>

export const Default: Story = {}
