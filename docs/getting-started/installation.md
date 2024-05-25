---
sidebar_position: 2
---

# Installation

## Requirements

Before installing Neutomic, ensure your system meets the following requirements:

- **PHP 8.3 or higher**
- **Composer**
- **Git**

For additional functionality, you can optionally install the following PHP extensions:

- **`ext-zlib`**: For compression support
- **`ext-uv`**: For better performance
- **`ext-openssl`**: For HTTPS support
- **`ext-parallel`**: For parallel runtime support

## Create a New Project

To create a new Neutomic project, execute the following command in your terminal:

```bash
composer create-project neutomic/skeleton:dev-main my-project
```

This command will generate a new Neutomic project in the my-project directory. Next, navigate to the project directory and start the development server with the following commands:

```bash
cd my-project
php src/main.php http:server:cluster
```

This command will launch the Neutomic server. You can access your application by visiting http://localhost:8000 in your web browser.

## Environment Configuration

Neutomic's environment mode can be configured by setting the `PROJECT_MODE` environment variable. The available modes are:

- **`development`**: For local development and debugging.
- **`production`**: For production deployments.
- **`testing`**: For running automated tests.

Debugging information is displayed when `PROJECT_DEBUG` is set to `true`, which is useful for development and debugging purposes.
