import { usePage } from "@inertiajs/react";

export function can(permission) {
    const { auth } = usePage().props;    
    return auth.permissions?.includes(permission);
}
