import { usePage } from "@inertiajs/react";

export function RoleBasedComponent({ roles, children }) {
    const { auth } = usePage().props;

    const userRoles = auth["user.role"] || [];

    const hasRequiredRole = userRoles.some((role) => roles.includes(role));

    return hasRequiredRole ? children : null;
}

export function Admin({ children }) {
    return (
        <RoleBasedComponent roles={["admin"]}>{children}</RoleBasedComponent>
    );
}

export function SuperAdmin({ children }) {
    return (
        <RoleBasedComponent roles={["super_admin"]}>
            {children}
        </RoleBasedComponent>
    );
}

export function Registrar({ children }) {
    return (
        <RoleBasedComponent roles={["registrar"]}>
            {children}
        </RoleBasedComponent>
    );
}

export function Teacher({ children }) {
    return (
        <RoleBasedComponent roles={["teacher"]}>{children}</RoleBasedComponent>
    );
}

export function Cashier({ children }) {
    return (
        <RoleBasedComponent roles={["cashier"]}>{children}</RoleBasedComponent>
    );
}

export function Student({ children }) {
    return (
        <RoleBasedComponent roles={["student"]}>{children}</RoleBasedComponent>
    );
}

export function Faculty({ children }) {
    return (
        <RoleBasedComponent roles={["faculty"]}>{children}</RoleBasedComponent>
    );
}
