export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type TableSchema<T> = {
  Row: T
  Insert: Partial<T>
  Update: Partial<T>
  Relationships: []
}

export type DatabaseSchema = {
  public: {
    Tables: Record<string, TableSchema<unknown>>
    Views: Record<string, TableSchema<unknown>>
    Functions: Record<string, FunctionSchema>
    Enums: Record<string, string[]>
    CompositeTypes: Record<string, string[]>
  }
}

export type FunctionSchema = {
  Args: Record<string, unknown>
  Returns: unknown
}

export type Tables<T extends keyof DatabaseSchema["public"]["Tables"]> = DatabaseSchema["public"]["Tables"][T]["Row"]

export type TablesInsert<T extends keyof DatabaseSchema["public"]["Tables"]> = DatabaseSchema["public"]["Tables"][T]["Insert"]

export type TablesUpdate<T extends keyof DatabaseSchema["public"]["Tables"]> = DatabaseSchema["public"]["Tables"][T]["Update"]

export type Enums<T extends keyof DatabaseSchema["public"]["Enums"]> = DatabaseSchema["public"]["Enums"][T]

export type CompositeTypes<T extends keyof DatabaseSchema["public"]["CompositeTypes"]> = DatabaseSchema["public"]["CompositeTypes"][T]

